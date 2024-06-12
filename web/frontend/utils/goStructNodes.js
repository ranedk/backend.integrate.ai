const goStructs = `
type MaritalStatus string

const (
  Married  MaritalStatus = "married"
  Single   MaritalStatus = "single"
  Divorced MaritalStatus = "divorced"
)

type EmploymentType string

const (
  Unemployed    EmploymentType = "unemployed"
  SelfEmployed  EmploymentType = "self_employed"
  PublicSector  EmploymentType = "public_sector"
  PrivateSector EmploymentType = "private_sector"
  DefenseSector EmploymentType = "defense_sector"
)

type KYCStatus string

const (
  Completed KYCStatus = "completed"
  Started   KYCStatus = "started"
  InProcess KYCStatus = "in_process"
  Failed    KYCStatus = "failed"
)

type AddressType string

const (
  Office        AddressType = "office"
  Residence     AddressType = "residence"
  Permanent     AddressType = "permanent"
  Shipping      AddressType = "shipping"
  Communication AddressType = "communication"
)

type ApplicationDetails struct {
  gorm.Model
  RequestID     sql.NullString
  PlanID        sql.NullString
  UserDetailsID *uint
  UserDetails   *UserDetails \`gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"\`
  APIResponse   sql.NullString
}

type OfferDetails struct {
  OfferID     sql.NullString
  PlanID      sql.NullString
  Validity    sql.NullTime
  Details     sql.NullString
  APIResponse sql.NullString
}

type UserDetails struct {
  gorm.Model
  Name              sql.NullString
  Dob               sql.NullTime
  Phone             sql.NullString
  Email             sql.NullString
  MaritalStatus     MaritalStatus
  KYCDetailsID      *uint
  KYCDetails        *KYCDetails \`gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"\`
  PANDetailsID      *uint
  PANDetails        *PANDetails \`gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"\`
  BureauDetailsID   *uint
  BureauDetails     *BureauDetails \`gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"\`
  ParentalDetailsID *uint
  ParentalDetails   *ParentalDetails \`gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"\`
  WorkDetailID      *uint
  WorkDetail        *WorkDetails \`gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"\`
  Addresses         []Address
  SpouseDetailsID   *uint
  SpouseDetails     *SpouseDetails \`gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"\`
  ExtraFields       sql.NullString
  BankDetails       []BankDetails
}

type KYCDetails struct {
  gorm.Model
  CKYCID    *uint
  CKYC      *CKYC\`gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"\`
  OKYCID    *uint
  OKYC      *OKYC \`gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"\`
  VKYCID    *uint
  VKYC      *VKYC \`gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"\`
  KYCStatus KYCStatus
}

type CKYC struct {
  gorm.Model
  CKYCID      sql.NullString
  Name        sql.NullString
  Dob         sql.NullTime
  AddressID   *uint
  Expiry      sql.NullTime
  Image       sql.NullString
  Address     *Address \`gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"\`
  Status      KYCStatus
  APIResponse sql.NullString
}

type OKYC struct {
  gorm.Model
  OKYCID      sql.NullString
  Name        sql.NullString
  Dob         sql.NullTime
  AddressID   *uint
  Expiry      sql.NullTime
  Image       sql.NullString
  Source      sql.NullString
  Address     *Address \`gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"\`
  Status      KYCStatus
  APIResponse sql.NullString
}

type VKYC struct {
  gorm.Model
  VCID        *uint
  Expiry      sql.NullTime
  Status      KYCStatus
  APIResponse sql.NullString
}

type BankDetails struct {
  gorm.Model
  UserDetailsID uint
  AccountNumber sql.NullString
  BankName      sql.NullString
  Branch        sql.NullString
  IFSC          sql.NullString
}

type PANDetails struct {
  gorm.Model
  Verified sql.NullBool
  Dob      sql.NullTime
  Phone    sql.NullString
}

type BureauDetails struct {
  gorm.Model
  CreditScore   int
  CreditHistory sql.NullString
  DPDDetails    sql.NullString
  APIResponse   sql.NullString
}

type SpouseDetails struct {
  gorm.Model
  Name sql.NullString
}

type WorkDetails struct {
  gorm.Model
  EmploymentType   EmploymentType
  Income           sql.NullInt32
  Email            sql.NullString
  CompanyDetailsID *uint
  CompanyDetails   *CompanyDetails \`gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"\`
}

type CompanyDetails struct {
  gorm.Model
  Name      sql.NullString
  AddressID *uint
  Address   *Address \`gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"\`
}

type Address struct {
  gorm.Model
  AddressType   AddressType
  AddressLine1  sql.NullString
  AddressLine2  sql.NullString
  AddressLine3  sql.NullString
  AddressLine4  sql.NullString
  Landmark      sql.NullString
  PostalCode    sql.NullString
  City          sql.NullString
  UserDetailsID uint
}

type ParentalDetails struct {
  gorm.Model
  Name         sql.NullString
  Relationship sql.NullString
}
`

// This function parses the Go struct definitions and converts them into a JavaScript data structure.
function parseGoStructs(goFileContent) {
  const structs = {}
  const structRegex = /type (\w+) struct {([^}]+)}/g
  const fieldRegex = /\n\s*(\w+)\s+(\*?\w+|\[\]\w+)(\s+`[^`]+`)?/g

  let match
  while ((match = structRegex.exec(goFileContent)) !== null) {
    const [_, structName, fieldsStr] = match
    const fields = []
    let fieldMatch
    while ((fieldMatch = fieldRegex.exec(fieldsStr)) !== null) {
      const [__, fieldName, fieldType] = fieldMatch
      fields.push({
        name: fieldName,
        type: fieldType.replace(/\[\]/, 'Array of '),
        children: [],
      })
    }
    structs[structName] = {
      name: structName,
      type: 'Struct',
      fields,
      children: [],
    }
  }

  // Recursively add children based on field types
  function addChildren(node) {
    if (node.type === 'Struct') {
      node.fields.forEach((field) => {
        if (structs[field.type]) {
          // If field type is a struct, add its fields as children
          field.children = structs[field.type].fields
          field.children.forEach(addChildren)
        } else if (field.type.startsWith('Array of ')) {
          // Handle array types
          const elemType = field.type.replace('Array of ', '')
          if (structs[elemType]) {
            field.children = structs[elemType].fields
            field.children.forEach(addChildren)
          }
        }
      })
    }
  }

  // Initialize the recursive addition of children
  Object.values(structs).forEach(addChildren)

  // Assuming "ApplicationDetails" is the root struct
  return structs['ApplicationDetails']
}

// Example usage:
const jsDataStructure = parseGoStructs(goStructs)
console.log(jsDataStructure)

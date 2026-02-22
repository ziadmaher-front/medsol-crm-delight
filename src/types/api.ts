// ==================== LEADS ====================
export interface CreateLeadDto {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  shipping_street: string;
  billing_city: string;
  ownerId?: string;
  salutation?: string;
  accountId?: string;
  product_name?: string;
  currency_code?: string;
  employee_count?: number;
  hq_code?: string;
  billing_amount?: number;
  exchange_rate?: number;
  shipping_street_2?: string;
  shipping_city?: string;
  shipping_state?: string;
  shipping_country?: string;
  shipping_zip_code?: string;
  billing_street?: string;
  billing_street_2?: string;
  billing_state?: string;
  billing_country?: string;
  billing_zip_code?: string;
}

export interface LeadResponseDto extends CreateLeadDto {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// ==================== ACCOUNTS ====================
export interface CreateAccountDto {
  name: string;
  phone: string;
  userIds: string[];
  accountNumber?: string;
  website?: string;
  billing_street?: string;
  billing_city?: string;
  billing_state?: string;
  billing_zip?: string;
  billing_country?: string;
  shipping_street?: string;
  shipping_city?: string;
  shipping_state?: string;
  shipping_zip?: string;
  shipping_country?: string;
  territory?: string;
  industry?: string;
  accountType?: string;
  ownership?: string;
  parentAccountId?: string;
}

export interface AccountResponseDto extends CreateAccountDto {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// ==================== CONTACTS ====================
export interface CreateContactDto {
  first_name: string;
  last_name: string;
  email: string;
  ownerId?: string;
  salutation?: string;
  phone?: string;
  mobile_phone?: string;
  accountId?: string;
  department?: string;
  governmentCode?: string;
  territory?: string;
  secondary_phone?: string;
  assistant_name?: string;
  currency_code?: string;
  username?: string;
  wp_number?: string;
  box_folder_id?: string;
  assigned_profile?: string;
  user_permissions?: string;
  mailing_street?: string;
  mailing_city?: string;
  mailing_state?: string;
  mailing_zip?: string;
  mailing_country?: string;
}

export interface ContactResponseDto extends CreateContactDto {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// ==================== DEALS ====================
export interface CreateDealDto {
  name: string;
  accountId: string;
  ownerId: string;
  leadId?: string;
  contactId?: string;
  amount?: number;
  closingDate?: string;
  currency?: string;
  type?: string;
  stage?: string;
  probability?: number;
  leadSource?: string;
  description?: string;
  boxFolderId?: string;
  campaignSource?: string;
  quote?: string;
}

export interface DealResponseDto extends CreateDealDto {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// ==================== ACTIVITIES ====================
export interface CreateActivityDto {
  activityType: string;
  subject: string;
  meetingDateTime: string;
  duration: string;
  status: string;
  outcome?: string;
  description?: string;
  leadId?: string;
  contactId?: string;
  dealId?: string;
  accountId?: string;
}

export interface ActivityResponseDto extends CreateActivityDto {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// ==================== PROFILES ====================
export interface ModulePermissions {
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
}

export interface CreateProfileDto {
  name: string;
  description?: string;
  permissions?: Record<string, ModulePermissions>;
}

export interface ProfileResponseDto extends CreateProfileDto {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// ==================== ROLES ====================
export interface CreateRoleDto {
  name: string;
  description?: string;
  parentId?: string;
  shareDataWithPeers?: boolean;
}

export interface RoleResponseDto extends CreateRoleDto {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// ==================== TASKS ====================
export interface CreateTaskDto {
  ownerId: string;
  subject: string;
  dueDate?: string;
  description?: string;
  notes?: string;
  links?: string[];
  priority?: "Low" | "Medium" | "High" | "Urgent";
  status?: "not started" | "deferred" | "in progress" | "completed";
  rfqId?: string;
  currency?: string;
  exchangeRate?: number;
  closedTime?: string;
}

export interface TaskResponseDto extends CreateTaskDto {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// ==================== RFQs ====================
export interface RFQProduct {
  productId?: string;
  quantity: number;
  discount?: string;
}

export interface CreateRFQDto {
  rfqName: string;
  accountId: string;
  currency: "USD" | "AED" | "EGP";
  rfqNumber?: string;
  contactId?: string;
  leadId?: string;
  vendorId?: string;
  status?: "SUBMITTED" | "COMPLETED";
  paymentTerms?: string;
  additionalNotes?: string;
  rfqProducts?: RFQProduct[];
}

export interface RFQResponseDto extends CreateRFQDto {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// ==================== SHARED ====================
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface BulkDeleteResponse {
  deletedCount: number;
  failedIds?: { id: string; error: string }[];
}

export interface BulkUpdateResponse {
  updatedCount: number;
  failedItems?: { id: string; error: string }[];
}

export interface SimpleUser {
  id: string;
  name: string;
  email: string;
}

export interface SimpleAccount {
  id: string;
  name: string;
  accountNumber: string;
}

export interface SimpleLead {
  id: string;
  name?: string;
  first_name?: string;
  last_name?: string;
}

export interface SimpleContact {
  id: string;
  name?: string;
  first_name?: string;
  last_name?: string;
}

export interface SimpleProduct {
  id: string;
  name: string;
}

export interface SimpleVendor {
  id: string;
  name: string;
}

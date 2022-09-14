export type Categories = Category[]

export interface Category {
  CategoryTypeIdentity: string
  CategoryTypeName: string
  CategoryEvents: CategoryEvent[]
  Name: string
  Identity: string
}

export interface CategoryEvent {
  EventIdentity: string
  HostKey: string
  Description: string | null
  EndDateTime: Date
  EventType: string
  IsPublished: boolean
  Location: string
  Owner: string
  StartDateTime: Date
  IsDeleted: boolean
  LastModified: Date
  ExtraProperties: ExtraProperty[]
  UserManuallyAddedEvent: boolean
  StatusIdentity: string
  Status: null
  StatusBackgroundColor: null
  Name: string
  Identity: string
}

export interface ExtraProperty {
  Name: string
  DisplayName: string
  Value: string
  Rank: number
}

export interface SearchQuery {
  CategoryIdentities: string[]
  ViewOptions: ViewOptions
}

export interface ViewOptions {
  Days: Day[]
  Weeks: Week[]
  TimePeriods: TimePeriod[]
  DatePeriods: DatePeriod[]
  LegendItems: []
  InstitutionConfig: {}
  DateConfig: DateConfig
  AllDays: Day[]
}

export interface Day {
  Name: string
  DayOfWeek: number
  IsDefault: boolean
}

export interface DateConfig {
  FirstDayInWeek: number
  StartDate: Date
  EndDate: Date
}

export interface DatePeriod {
  Description: string
  StartDateTime: Date
  EndDateTime: Date
  IsDefault: boolean
  IsThisWeek: boolean
  IsNextWeek: boolean
  Type: string | null
}

export interface TimePeriod {
  Description: string
  StartTime: string
  EndTime: string
  IsDefault: boolean
}

export interface Week {
  WeekNumber: number
  WeekLabel: string
  FirstDayInWeek: Date
}

export interface SearchResults {
  TotalPages: number
  CurrentPage: number
  Results: Result[]
  Count: number
}

export interface Result {
  ParentCategoryIdentities: string[]
  CategoryTypeIdentity: string
  CategoryTypeName: null
  CategoryEvents: null
  Name: string
  Identity: string
}

export interface FoundCategory {
  Name: string
  Identity: string
}

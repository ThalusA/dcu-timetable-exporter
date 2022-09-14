import type { ViewOptions } from './interfaces'

export const DCU_HEADERS = new Headers({ Authorization: 'Basic T64Mdy7m[' })
export const OPEN_TIMETABLE_API_URL = 'https://opentimetable.dcu.ie/broker/api/CategoryTypes'
export const MODULE_SEARCH_COMMAND_UUID = '525fe79b-73c3-4b5c-8186-83c652b3adcc'
export const TIMETABLE_VIEW_OPTIONS: ViewOptions = {
  AllDays: [
    {
      Name: 'Monday',
      DayOfWeek: 1,
      IsDefault: true
    },
    {
      Name: 'Tuesday',
      DayOfWeek: 2,
      IsDefault: true
    },
    {
      Name: 'Wednesday',
      DayOfWeek: 3,
      IsDefault: true
    },
    {
      Name: 'Thursday',
      DayOfWeek: 4,
      IsDefault: true
    },
    {
      Name: 'Friday',
      DayOfWeek: 5,
      IsDefault: true
    },
    {
      Name: 'Saturday',
      DayOfWeek: 6,
      IsDefault: false
    },
    {
      Name: 'Sunday',
      DayOfWeek: 0,
      IsDefault: false
    }
  ],
  DateConfig: {
    FirstDayInWeek: 1,
    StartDate: new Date('2022-09-12T00:00:00+00:00'),
    EndDate: new Date('2023-09-04T00:00:00+00:00')
  },
  DatePeriods: [
    {
      Description: 'All Year',
      StartDateTime: new Date('2022-09-12T00:00:00.000Z'),
      EndDateTime: new Date('2023-09-08T00:00:00.000Z'),
      IsDefault: false,
      IsThisWeek: false,
      IsNextWeek: false,
      Type: null
    }
  ],
  Days: [
    {
      Name: 'Monday',
      DayOfWeek: 1,
      IsDefault: true
    },
    {
      Name: 'Tuesday',
      DayOfWeek: 2,
      IsDefault: true
    },
    {
      Name: 'Wednesday',
      DayOfWeek: 3,
      IsDefault: true
    },
    {
      Name: 'Thursday',
      DayOfWeek: 4,
      IsDefault: true
    },
    {
      Name: 'Friday',
      DayOfWeek: 5,
      IsDefault: true
    },
    {
      Name: 'Saturday',
      DayOfWeek: 6,
      IsDefault: false
    },
    {
      Name: 'Sunday',
      DayOfWeek: 0,
      IsDefault: false
    }
  ],
  InstitutionConfig: {},
  LegendItems: [],
  TimePeriods: [
    {
      Description: 'All Day',
      StartTime: '08:00',
      EndTime: '22:00',
      IsDefault: true
    }
  ],
  Weeks: [
    {
      WeekNumber: 1,
      WeekLabel: '1',
      FirstDayInWeek: new Date('2022-09-12T00:00:00.000Z')
    },
    {
      WeekNumber: 2,
      WeekLabel: '2',
      FirstDayInWeek: new Date('2022-09-19T00:00:00.000Z')
    },
    {
      WeekNumber: 3,
      WeekLabel: '3',
      FirstDayInWeek: new Date('2022-09-26T00:00:00.000Z')
    },
    {
      WeekNumber: 4,
      WeekLabel: '4',
      FirstDayInWeek: new Date('2022-10-03T00:00:00.000Z')
    },
    {
      WeekNumber: 5,
      WeekLabel: '5',
      FirstDayInWeek: new Date('2022-10-10T00:00:00.000Z')
    },
    {
      WeekNumber: 6,
      WeekLabel: '6',
      FirstDayInWeek: new Date('2022-10-17T00:00:00.000Z')
    },
    {
      WeekNumber: 7,
      WeekLabel: '7',
      FirstDayInWeek: new Date('2022-10-24T00:00:00.000Z')
    },
    {
      WeekNumber: 8,
      WeekLabel: '8',
      FirstDayInWeek: new Date('2022-10-31T00:00:00.000Z')
    },
    {
      WeekNumber: 9,
      WeekLabel: '9',
      FirstDayInWeek: new Date('2022-11-07T00:00:00.000Z')
    },
    {
      WeekNumber: 10,
      WeekLabel: '10',
      FirstDayInWeek: new Date('2022-11-14T00:00:00.000Z')
    },
    {
      WeekNumber: 11,
      WeekLabel: '11',
      FirstDayInWeek: new Date('2022-11-21T00:00:00.000Z')
    },
    {
      WeekNumber: 12,
      WeekLabel: '12',
      FirstDayInWeek: new Date('2022-11-28T00:00:00.000Z')
    },
    {
      WeekNumber: 13,
      WeekLabel: '13',
      FirstDayInWeek: new Date('2022-12-05T00:00:00.000Z')
    },
    {
      WeekNumber: 14,
      WeekLabel: '14',
      FirstDayInWeek: new Date('2022-12-12T00:00:00.000Z')
    },
    {
      WeekNumber: 15,
      WeekLabel: '15',
      FirstDayInWeek: new Date('2022-12-19T00:00:00.000Z')
    },
    {
      WeekNumber: 16,
      WeekLabel: '16',
      FirstDayInWeek: new Date('2022-12-26T00:00:00.000Z')
    },
    {
      WeekNumber: 17,
      WeekLabel: '17',
      FirstDayInWeek: new Date('2023-01-02T00:00:00.000Z')
    },
    {
      WeekNumber: 18,
      WeekLabel: '18',
      FirstDayInWeek: new Date('2023-01-09T00:00:00.000Z')
    },
    {
      WeekNumber: 19,
      WeekLabel: '19',
      FirstDayInWeek: new Date('2023-01-16T00:00:00.000Z')
    },
    {
      WeekNumber: 20,
      WeekLabel: '20',
      FirstDayInWeek: new Date('2023-01-23T00:00:00.000Z')
    },
    {
      WeekNumber: 21,
      WeekLabel: '21',
      FirstDayInWeek: new Date('2023-01-30T00:00:00.000Z')
    },
    {
      WeekNumber: 22,
      WeekLabel: '22',
      FirstDayInWeek: new Date('2023-02-06T00:00:00.000Z')
    },
    {
      WeekNumber: 23,
      WeekLabel: '23',
      FirstDayInWeek: new Date('2023-02-13T00:00:00.000Z')
    },
    {
      WeekNumber: 24,
      WeekLabel: '24',
      FirstDayInWeek: new Date('2023-02-20T00:00:00.000Z')
    },
    {
      WeekNumber: 25,
      WeekLabel: '25',
      FirstDayInWeek: new Date('2023-02-27T00:00:00.000Z')
    },
    {
      WeekNumber: 26,
      WeekLabel: '26',
      FirstDayInWeek: new Date('2023-03-06T00:00:00.000Z')
    },
    {
      WeekNumber: 27,
      WeekLabel: '27',
      FirstDayInWeek: new Date('2023-03-13T00:00:00.000Z')
    },
    {
      WeekNumber: 28,
      WeekLabel: '28',
      FirstDayInWeek: new Date('2023-03-20T00:00:00.000Z')
    },
    {
      WeekNumber: 29,
      WeekLabel: '29',
      FirstDayInWeek: new Date('2023-03-27T00:00:00.000Z')
    },
    {
      WeekNumber: 30,
      WeekLabel: '30',
      FirstDayInWeek: new Date('2023-04-03T00:00:00.000Z')
    },
    {
      WeekNumber: 31,
      WeekLabel: '31',
      FirstDayInWeek: new Date('2023-04-10T00:00:00.000Z')
    },
    {
      WeekNumber: 32,
      WeekLabel: '32',
      FirstDayInWeek: new Date('2023-04-17T00:00:00.000Z')
    },
    {
      WeekNumber: 33,
      WeekLabel: '33',
      FirstDayInWeek: new Date('2023-04-24T00:00:00.000Z')
    },
    {
      WeekNumber: 34,
      WeekLabel: '34',
      FirstDayInWeek: new Date('2023-05-01T00:00:00.000Z')
    },
    {
      WeekNumber: 35,
      WeekLabel: '35',
      FirstDayInWeek: new Date('2023-05-08T00:00:00.000Z')
    },
    {
      WeekNumber: 36,
      WeekLabel: '36',
      FirstDayInWeek: new Date('2023-05-15T00:00:00.000Z')
    },
    {
      WeekNumber: 37,
      WeekLabel: '37',
      FirstDayInWeek: new Date('2023-05-22T00:00:00.000Z')
    },
    {
      WeekNumber: 38,
      WeekLabel: '38',
      FirstDayInWeek: new Date('2023-05-29T00:00:00.000Z')
    },
    {
      WeekNumber: 39,
      WeekLabel: '39',
      FirstDayInWeek: new Date('2023-06-05T00:00:00.000Z')
    },
    {
      WeekNumber: 40,
      WeekLabel: '40',
      FirstDayInWeek: new Date('2023-06-12T00:00:00.000Z')
    },
    {
      WeekNumber: 41,
      WeekLabel: '41',
      FirstDayInWeek: new Date('2023-06-19T00:00:00.000Z')
    },
    {
      WeekNumber: 42,
      WeekLabel: '42',
      FirstDayInWeek: new Date('2023-06-26T00:00:00.000Z')
    },
    {
      WeekNumber: 43,
      WeekLabel: '43',
      FirstDayInWeek: new Date('2023-07-03T00:00:00.000Z')
    },
    {
      WeekNumber: 44,
      WeekLabel: '44',
      FirstDayInWeek: new Date('2023-07-10T00:00:00.000Z')
    },
    {
      WeekNumber: 45,
      WeekLabel: '45',
      FirstDayInWeek: new Date('2023-07-17T00:00:00.000Z')
    },
    {
      WeekNumber: 46,
      WeekLabel: '46',
      FirstDayInWeek: new Date('2023-07-24T00:00:00.000Z')
    },
    {
      WeekNumber: 47,
      WeekLabel: '47',
      FirstDayInWeek: new Date('2023-07-31T00:00:00.000Z')
    },
    {
      WeekNumber: 48,
      WeekLabel: '48',
      FirstDayInWeek: new Date('2023-08-07T00:00:00.000Z')
    },
    {
      WeekNumber: 49,
      WeekLabel: '49',
      FirstDayInWeek: new Date('2023-08-14T00:00:00.000Z')
    },
    {
      WeekNumber: 50,
      WeekLabel: '50',
      FirstDayInWeek: new Date('2023-08-21T00:00:00.000Z')
    },
    {
      WeekNumber: 51,
      WeekLabel: '51',
      FirstDayInWeek: new Date('2023-08-28T00:00:00.000Z')
    },
    {
      WeekNumber: 52,
      WeekLabel: '52',
      FirstDayInWeek: new Date('2023-09-04T00:00:00.000Z')
    }
  ]

}

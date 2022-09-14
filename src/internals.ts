import type { Categories, SearchResults, FoundCategory, SearchQuery } from './interfaces'
import { DCU_HEADERS, OPEN_TIMETABLE_API_URL, MODULE_SEARCH_COMMAND_UUID, TIMETABLE_VIEW_OPTIONS } from './constants'

async function findCategoryByName (name: string): Promise<FoundCategory> {
  const response = await fetch(`${OPEN_TIMETABLE_API_URL}/${MODULE_SEARCH_COMMAND_UUID}/Categories/Filter?pageNumber=1&query=${name}`, {
    headers: DCU_HEADERS,
    method: 'POST'
  })
  const results: SearchResults = await response.json()
  if (results.Count < 1) {
    throw new Error(`There is no module named '${name}'`)
  } else {
    return { Name: results.Results[0].Name, Identity: results.Results[0].Identity }
  }
}

async function findCategoryScheduleByIdentities (identities: string[]): Promise<Categories> {
  const searchQuery: SearchQuery = {
    CategoryIdentities: identities,
    ViewOptions: TIMETABLE_VIEW_OPTIONS
  }
  const response = await fetch(`${OPEN_TIMETABLE_API_URL}/${MODULE_SEARCH_COMMAND_UUID}/categories/events/filter`, {
    headers: DCU_HEADERS,
    body: JSON.stringify(searchQuery),
    method: 'POST'
  })
  return await response.json()
}

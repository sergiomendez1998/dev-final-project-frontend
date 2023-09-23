export const URL_BASE_APP = import.meta.env.VITE_BASE_URL;
export const APP_NAME = import.meta.env.VITE_APP_NAME;
export const IMAGE_PREFIX = import.meta.env.VITE_IMAGE_PREFIX;
export const CATALOGS = {
  analysisDocumentType: 'analysisDocumentType',
  department: 'department',
  item: 'item',
  measureUnit: 'measureUnit',
  role: 'role',
  sampleType: 'sampleType',
  statusRequest: 'status',
  supportType: 'supportType',
  testType: 'examType',
};

export const CATALOGS_NAME = [
    { name: 'Tipo de documento', value: 'analysisDocumentType' },
    { name: 'Departamento', value: 'department' },
    { name: 'Item', value: 'item' },
    { name: 'Unidad de medida', value: 'measureUnit' },
    { name: 'Rol', value: 'role' },
    { name: 'Tipo de muestra', value: 'sampleType' },
    { name: 'Estado de solicitud', value: 'status' },
    { name: 'Tipo de soporte', value: 'supportType' },
    { name: 'Tipo de prueba', value: 'examType' },
]

export const PAGINATION_OPTIONS = {
  rowsPerPageText: "Elementos Por Pagina",
  rangeSeparatorText: "de",
  selectAllRowsItem: false,
  selectAllRowsItemText: "Todos",
};

export const SELECTED_MESSAGE = {
  singular: "Elemento",
  plural: "Elementos",
  message: "Seleccionado(s)",
};
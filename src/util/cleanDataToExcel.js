import { writeFile, utils } from 'xlsx';

export const exportToExcel = (data, parsingXlsx, title) => {
  const parsingData = parsingXlsx ? parsingXlsx(data) : data;
  const workSheet = utils.json_to_sheet(parsingData);
  const workBook = utils.book_new();
  utils.book_append_sheet(workBook, workSheet, title);
  writeFile(workBook, `${title}.xlsx`);
};

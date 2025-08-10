export default async function run() {
  let dataFiles = import.meta.glob("../data/*");

  let jsonData = [];

  for (let file in dataFiles) {
    let load = dataFiles[file];

    let content = await load();

    jsonData.push(content);
  }

  return jsonData;
}

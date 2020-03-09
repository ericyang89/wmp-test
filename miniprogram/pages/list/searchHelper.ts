const data:any = {
  前: ["前端"],
  "前端": ["前端"],
  "front end": ["前端"],
  frontend: ["前端"],
  front: ["前端"],
  后: ["后端"],
  后端: ["后端"],
  back: ["后端"],
  backend: ["后端"],
  "back end": ["后端"],
  工程师: ["前端", "后端"]
};

const searchHelper = function(keyWords: string) {
  const resultKeyWords:string[] = data[keyWords] || ["暂无相关内容"];
  return Promise.resolve(resultKeyWords.map((item, index) => ({ value: index, text: item }));
};

export default searchHelper
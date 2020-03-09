import commonWx from "./commonWx";
import { baseUri } from "../config/constant";

const commonResquest: (
  options: WechatMiniprogram.RequestOption
) => Promise<any> = options => {
  const newOption = {
    ...options,
    url: /^http/.test(options.url) ? options.url : baseUri + options.url
  };

  return commonWx.request(newOption);
};

export default commonResquest;

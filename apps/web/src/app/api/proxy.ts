// import { createProxyMiddleware } from "http-proxy-middleware";
// //@ts-expect-error
// export default function handler(req, res) {
//   const proxy = createProxyMiddleware({
//     target: "https://unpkg.com",
//     changeOrigin: true,
//     pathRewrite: {
//       "^/api/proxy-pdf-worker": "/pdfjs-dist@2.10.377/build/pdf.worker.min.js", // Update the version
//     },
//   });

//   return proxy(req, res);
// }

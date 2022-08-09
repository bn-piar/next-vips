import Image from "next/image";
const src =
  "https://static.remove.bg/remove-bg-web/921e27d466ef35b7edeace25ca4070039131c0af/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png";
/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <h1>hello</h1>
      <Image src={src} width={150} height={150} objectFit={"contain"} />
    </div>
  );
}

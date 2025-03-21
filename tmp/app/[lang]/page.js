// app/[lang]/page.js
import { getDictionary } from "../../dictionaries";
import Profile from "@/components/sections/Profile";
import Works from "@/components/sections/Works";
import Publications from "@/components/sections/Publications";

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <Profile dict={dict} />
      {/* <Works dict={dict} />
      <Publications dict={dict} /> */}
    </>
  );
}

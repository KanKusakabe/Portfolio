// components/sections/Profile.js

export default function Profile({ dict }) {
  return (
    <section id="profile" className="py-0 px-10">
      <h2 className="text-4xl font-bold mb-6">{dict.main.name}</h2>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold">{dict.main.name}</h3>
        <p>{dict.main.aboutText}</p>
        <br />
        <h3 className="text-2xl font-semibold">{dict.main.name}</h3>
        <ul className="list-disc pl-6 text-lg">
          <li>{dict.main.name}</li>
          <li>{dict.main.name}</li>
          <li>{dict.main.name}</li>
        </ul>
        <br />
        <h3 className="text-2xl font-semibold">{dict.main.name}</h3>
        <p className="text-lg mt-2">{dict.main.name}</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex justify-center px-4 relative overflow-auto">

      {/* starry background */}
      <div className="stars absolute inset-0"></div>

      {/* main portfolio */}
      <div className={`m-8 w-full max-w-5xl rounded-lg p-6 flex flex-col`}>
        {/* title */}
        <header className="text-white my-4 xl:text-3xl lg:text-2xl md:text-xl text-lg text-center">
          Welcome to my Portfolio!
        </header>

        {/* Profile Picture */}
        <div className="profile flex justify-center">
          <img src="/profile.jpeg" alt="Profile" className="rounded-full border-4 w-40 h-40" />
        </div>

        {/* About me + resume linked*/}
        <div className="aboutme">

        </div>

        {/* my skills displayed */}
        <div className="skills">

        </div>

        {/* my projects listed */}
        <div className="projects">

        </div>

        {/* contact me */}
        <div className="contact">

        </div>
      </div>
    </div >
  );
}

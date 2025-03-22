export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Qasim Error</h1>
      <p className="text-xl mb-8 text-center text-white">Software Engineer</p>

      <div className="space-y-8 w-full max-w-3xl">
        <section className="p-6 rounded-lg border border-[#2a2e5a] bg-[#101123]">
          <h2 className="text-2xl font-semibold mb-4 text-[#16f2b3]">About Me</h2>
          <p className="text-gray-200">
            I am a passionate and professional Flutter developer who thrives on building high-quality mobile applications.
            I have a strong self-learning attitude and always seek to improve my skills and explore new technologies.
          </p>
        </section>

        <section className="p-6 rounded-lg border border-[#2a2e5a] bg-[#101123]">
          <h2 className="text-2xl font-semibold mb-4 text-[#16f2b3]">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-white">Flutter Developer</h3>
              <p className="text-gray-300">Al-Jazeera Telecom (Jun 2024 - Present)</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Flutter Developer</h3>
              <p className="text-gray-300">Freelance (Jun 2023 - Present)</p>
            </div>
          </div>
        </section>

        <section className="p-6 rounded-lg border border-[#2a2e5a] bg-[#101123]">
          <h2 className="text-2xl font-semibold mb-4 text-[#16f2b3]">Skills</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-[#1a1443] rounded-full text-white">Flutter</span>
            <span className="px-3 py-1 bg-[#1a1443] rounded-full text-white">Dart</span>
            <span className="px-3 py-1 bg-[#1a1443] rounded-full text-white">Firebase</span>
            <span className="px-3 py-1 bg-[#1a1443] rounded-full text-white">HTML</span>
            <span className="px-3 py-1 bg-[#1a1443] rounded-full text-white">CSS</span>
            <span className="px-3 py-1 bg-[#1a1443] rounded-full text-white">JavaScript</span>
          </div>
        </section>

        <section className="p-6 rounded-lg border border-[#2a2e5a] bg-[#101123]">
          <h2 className="text-2xl font-semibold mb-4 text-[#16f2b3]">Contact</h2>
          <div className="space-y-2">
            <p className="text-gray-200">Email: QasimError404@gmail.com</p>
            <p className="text-gray-200">Location: Iraq, Baghdad</p>
            <div className="pt-4">
              <a href="mailto:QasimError404@gmail.com" className="px-5 py-2 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full text-white">
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-8 text-center text-gray-300">
        <p>This is a static version of my portfolio. Please enable JavaScript for the full experience.</p>
        <script dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Redirect if JavaScript is enabled
            window.location.href = '/full-portfolio';
          });
        `}} />
      </div>
    </div>
  );
}
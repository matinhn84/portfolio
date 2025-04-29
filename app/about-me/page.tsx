import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark text-white font-mono">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <section className="py-16">
          <div className="flex items-center gap-4 mb-8">
            <h1 className="text-3xl font-semibold">
              <span className="text-purple">#</span>about-me
            </h1>
            <div className="flex-grow h-px bg-purple"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-light mb-4">Hello, I'm Elias!</p>
              <p className="text-light mb-4">
                I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from
                scratch and raise them into modern user-friendly web experiences.
              </p>
              <p className="text-light mb-4">
                Transforming my creativity and knowledge into websites has been my passion for over a year. I always
                strive to learn about the newest technologies and frameworks.
              </p>
              <p className="text-light mb-4">
                I started learning web development in 2020, and since then I've been building various projects to
                improve my skills. I'm currently focused on React and Next.js, but I'm always open to learning new
                technologies.
              </p>
              <p className="text-light mb-4">
                When I'm not coding, you can find me biking with friends, playing video games, or exploring new places.
              </p>
            </div>

            <div className="relative">
              <div className="dot-pattern absolute top-0 right-0 w-32 h-32 opacity-20"></div>
              <div className="dot-pattern absolute bottom-0 left-0 w-32 h-32 opacity-20"></div>
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Elias portrait"
                width={300}
                height={300}
                className="border border-purple p-2 mx-auto"
              />
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-xl font-semibold">
                <span className="text-purple">#</span>skills
              </h2>
              <div className="flex-grow h-px bg-purple"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1 relative">
                <div className="dot-pattern absolute top-10 left-10 w-32 h-32 opacity-20"></div>
                <div className="dot-pattern absolute bottom-10 right-10 w-32 h-32 opacity-20"></div>
                <p className="text-light">
                  I've been doing web development for about 3 years now, and I'm always looking for new technologies to
                  learn.
                </p>
              </div>

              <div className="col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {/* Languages */}
                  <div className="border border-gray">
                    <div className="border-b border-gray p-2">
                      <h3 className="font-semibold">Languages</h3>
                    </div>
                    <div className="p-2">
                      <ul className="text-light">
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Lua</li>
                      </ul>
                    </div>
                  </div>

                  {/* Databases */}
                  <div className="border border-gray">
                    <div className="border-b border-gray p-2">
                      <h3 className="font-semibold">Databases</h3>
                    </div>
                    <div className="p-2">
                      <ul className="text-light">
                        <li>SQLite</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                      </ul>
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="border border-gray">
                    <div className="border-b border-gray p-2">
                      <h3 className="font-semibold">Tools</h3>
                    </div>
                    <div className="p-2">
                      <ul className="text-light">
                        <li>VSCode</li>
                        <li>Figma</li>
                        <li>Git</li>
                        <li>Font Awesome</li>
                      </ul>
                    </div>
                  </div>

                  {/* Frameworks */}
                  <div className="border border-gray">
                    <div className="border-b border-gray p-2">
                      <h3 className="font-semibold">Frameworks</h3>
                    </div>
                    <div className="p-2">
                      <ul className="text-light">
                        <li>React</li>
                        <li>Vue</li>
                        <li>Disnake</li>
                        <li>Discord.js</li>
                      </ul>
                    </div>
                  </div>

                  {/* Other */}
                  <div className="border border-gray">
                    <div className="border-b border-gray p-2">
                      <h3 className="font-semibold">Other</h3>
                    </div>
                    <div className="p-2">
                      <ul className="text-light">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SCSS</li>
                        <li>REST</li>
                        <li>Jinja</li>
                      </ul>
                    </div>
                  </div>

                  {/* Frameworks */}
                  <div className="border border-gray">
                    <div className="border-b border-gray p-2">
                      <h3 className="font-semibold">Frameworks</h3>
                    </div>
                    <div className="p-2">
                      <ul className="text-light">
                        <li>Express.js</li>
                        <li>Next.js</li>
                        <li>TailwindCSS</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-semibold">
                <span className="text-purple">#</span>my-fun-facts
              </h3>
              <div className="flex-grow h-px bg-purple"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-wrap gap-4">
                <div className="border border-gray p-2 text-light text-sm">I like winter more than summer</div>
                <div className="border border-gray p-2 text-light text-sm">I often bike with my friends</div>
                <div className="border border-gray p-2 text-light text-sm">I like pizza and pasta</div>
                <div className="border border-gray p-2 text-light text-sm">I was in Egypt, Poland and Turkey</div>
                <div className="border border-gray p-2 text-light text-sm">I'm still in school</div>
                <div className="border border-gray p-2 text-light text-sm">My favorite movie is The Green Mile</div>
              </div>

              <div className="relative">
                <div className="dot-pattern absolute top-0 right-0 w-32 h-32 opacity-20"></div>
                <div className="dot-pattern absolute bottom-0 left-0 w-32 h-32 opacity-20"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

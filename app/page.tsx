import Image from "next/image"
import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white font-mono">
      <Navbar />

      <main className="container mx-auto px-4 py-8 w-[80%]">
        {/* Hero Section */}
        <section className="py-16 relative">
          <div className="dot-pattern absolute top-20 right-0 w-40 h-40 opacity-20"></div>
          <div className="dot-pattern absolute top-[45%] right-[22%] w-20 h-20 opacity-100 z-10"></div>
          <div className="dot-pattern absolute bottom-0 left-20 w-72 h-72 opacity-20"></div>

          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <p className="text-light">
                Matin is a <span className="text-purple">web developer</span> and
              </p>
              <h1 className="text-4xl md:text-5xl font-bold my-4">
                back-end
                <br />
                developer
              </h1>

              <p className="text-light mb-8 max-w-lg">
                He crafts intelegent websites
              </p>

              <Button className="bg-transparent hover:bg-transparent text-white border border-purple hover:text-purple transition-colors">
                Contact me!!
              </Button>
            </div>

            <div className="relative mr-4">
              <div className="relative">
                <Image
                  src="\Flux_Dev_A_faceless_mysterious_person_wearing_a_dark_hoodie_an_2__1_-removebg-preview (1).png"
                  alt="portrait"
                  width={350}
                  height={350}
                  className="object-cover"
                />
                <div className="absolute bottom-0 right-0  translate-y-5 w-full
                  ">
                  <div className="w-[100%] h-8 border border-purple bg-dark flex items-center justify-center">
                    <div className="w-3 h-3 bg-purple rounded-full mr-2"></div>
                    <span className="text-xs">Currently working</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-gray pt-4 flex items-center gap-2">
            <div className="text-light"># With great power comes great electricity bill</div>
            <div className="flex-grow border-t border-gray"></div>
            <div className="text-light">- Dr. Who</div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16" id="projects">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-semibold">
              <span className="text-purple">#</span>projects
            </h2>

            <div className="flex-grow h-px bg-purple"></div>
            <p className="text-right"><Link href="/projects" className="text-light hover:text-purple ">
            View all ~~&gt;
            </Link></p>
            
            
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Project 1 */}
            <div className="border border-gray">
              <div className="p-0">
                <Image
                  src="\moodical.jpg"
                  alt="ChertNodes project"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <div className="border-b border-gray pb-2 mb-2">
                  <p className="text-light">Telegram bot</p>
                </div>
                <h3 className="font-bold mb-4">Moodical</h3>
                <p className="text-light text-sm mb-4">Suggest song according to mood</p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple text-white hover:bg-purple hover:text-white"
                  >
                    Live &lt;~&gt;
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple text-white hover:bg-purple hover:text-white"
                  >
                    Cached &gt;=
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border border-gray">
              <div className="p-0">
                <Image
                  src="\ustate.jpg"
                  alt="ProtectX project"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <div className="border-b border-gray pb-2 mb-2">
                  <p className="text-light">Website</p>
                </div>
                <h3 className="font-bold mb-4">UState</h3>
                <p className="text-light text-sm mb-4">Rent & Sell Platform</p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple text-white hover:bg-purple hover:text-white"
                  >
                    Live &lt;~&gt;
                  </Button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border border-gray">
              <div className="p-0">
                <Image
                  src="\yamifood.jpg"
                  alt="restaurant website"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <div className="border-b border-gray pb-2 mb-2">
                  <p className="text-light">Website</p>
                </div>
                <h3 className="font-bold mb-4">YamiFood</h3>
                <p className="text-light text-sm mb-4">Menu With Classification & Reserve Table</p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple text-white hover:bg-purple hover:text-white"
                  >
                    Live &lt;~&gt;
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16" id="skills">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-semibold">
              <span className="text-purple">#</span>skills
            </h2>
            <div className="w-[18%] h-px bg-purple"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 relative">
              <div className="dot-pattern absolute top-10 left-10 w-32 h-32 opacity-20"></div>
              <div className="dot-pattern absolute bottom-10 right-10 w-32 h-32 opacity-20"></div>
              <p className="text-light">
                I've been doing web development for about 2 years now, and I'm always looking for new technologies to
                learn.
              </p>
            </div>

            <div className="col-span-2">
              <div className="grid grid-cols-3 grid-rows-2 gap-4">
                {/* Languages */}
                <div className="border border-gray">
                  <div className="border-b border-gray p-2">
                    <h3 className="font-semibold">Languages</h3>
                  </div>
                  <div className="p-2">
                    <ul className="text-light">
                      <li>Python</li>
                      <li>JavaScript</li>
                      <li>C++</li>
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
                      <li>MySQL</li>
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
                      <li>Git</li>
                      <li>GitHub</li>
                      <li>Doucker</li>
                    </ul>
                  </div>
                </div>


                <div className="col-start-2 row-start-2">
                  {/* Other */}
                  <div className="border border-gray">
                    <div className="border-b border-gray p-2">
                      <h3 className="font-semibold">Other</h3>
                    </div>
                    <div className="p-2">
                      <ul className="text-light">
                        <li>HTML</li>
                        <li>CSS</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="col-start-3 row-start-2">
                  {/* Frameworks */}
                  <div className="border border-gray">
                    <div className="border-b border-gray p-2">
                      <h3 className="font-semibold">Frameworks</h3>
                    </div>
                    <div className="p-2">
                      <ul className="text-light">
                        <li>Django</li>
                        <li>REST API</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16" id="about-me">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-semibold">
              <span className="text-purple">#</span>about-me
            </h2>
            <div className="flex-grow h-px bg-purple"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-light mb-4">Hello, I'm Matin!</p>
              <p className="text-light mb-4">
              In the quiet logic of code, I find my music.
              I build invisible worlds where data flows like rivers, where every function and database breathes life into ideas too big for the surface.
              </p>
              <p className="text-light mb-4">
              As a backend developer, I craft the unseen — the engines beneath the dream.
              Each project is a story written in syntax, a silent poem of persistence, precision, and pure, restless ambition.
              </p>
              <Button className="bg-transparent hover:bg-transparent text-white border border-purple hover:text-purple transition-colors mt-4">
                Read more ~&gt;
              </Button>
            </div>

            <div className="relative flex flex-col justify-end h-full">
              <div className="dot-pattern absolute top-0 right-0 w-32 h-32 opacity-20"></div>
              <div className="dot-pattern absolute bottom-0 left-0 w-32 h-32 opacity-20"></div>
              <Image
                src="\dev2_portrait.png"
                alt="portrait"
                width={350}
                height={350}
                className=" border-b border-purple mx-auto"
              />
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

        {/* Contacts Section */}
        <section className="py-16" id="contacts">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-semibold">
              <span className="text-purple">#</span>contacts
            </h2>
            <div className="flex-grow h-px bg-purple"></div>
          </div>

          <div className="grid grid-cols-3 grid-rows-1 gap-4">
 
              <p className="text-light mb-8">
                I'm interested in freelance opportunities. However, if you have other request or question, don't
                hesitate to contact me.
              </p>

              <div className="col-start-3 border border-gray p-4 w-fit justify-self-end mr-4">
                
                <h3 className="font-semibold mb-2">Message me here</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Mail size={16} className="text-light" />
                  </div>
                  <a href="mailto:matiin.hn@gmail.com" className="text-light hover:text-purple">
                    matiin.hn@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <Linkedin size={16} className="text-light" />
                  </div>
                  <a
                    href="https://linkedin.com/in/matin-hashemnia-8ab5b335a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light hover:text-purple"
                  >
                    Matin-HashemNia
                  </a>
                </div>
            </div>

            <div className="relative">
              <div className="dot-pattern absolute top-0 right-0 w-32 h-32 opacity-20"></div>
              <div className="dot-pattern absolute bottom-0 left-0 w-32 h-32 opacity-20"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
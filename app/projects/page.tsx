import Image from "next/image"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-dark text-white font-mono">
      <Navbar />

      <main className="container mx-auto px-4 py-8 mx-auto w-4/5">
        <section className="py-16">
          <div className="flex items-center gap-4 mb-8">
            <h1 className="text-3xl font-semibold">
              <span className="text-purple">#</span>projects
            </h1>
            <div className="flex-grow h-px bg-purple"></div>
          </div>

          <p className="text-light mb-12">List of my projects</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Complete Apps Section */}
            <div className="col-span-full mb-8">
              <h2 className="text-xl font-semibold mb-4">
                <span className="text-purple">/</span>complete-apps
              </h2>

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
            </div>

            {/* Small Projects Section
            <div className="col-span-full mb-8">
              <h2 className="text-xl font-semibold mb-4">
                <span className="text-purple">/</span>small-projects
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
                {/* Small Project 1 */}
                {/* <div className="border border-gray">
                  <div className="p-4">
                    <div className="border-b border-gray pb-2 mb-2">
                      <p className="text-light">Bot dashboard</p>
                    </div>
                    <h3 className="font-bold mb-4">Bot Dashboard</h3>
                    <p className="text-light text-sm mb-4">Dashboard for managing Discord bots</p>
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
                </div> */}

                {/* Small Project 2 */}
                {/* <div className="border border-gray">
                  <div className="p-4">
                    <div className="border-b border-gray pb-2 mb-2">
                      <p className="text-light">Personal blog</p>
                    </div>
                    <h3 className="font-bold mb-4">My Blog</h3>
                    <p className="text-light text-sm mb-4">Blog about my coding journey</p>
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
                </div> */}

                {/* Small Project 3 */}
                {/* <div className="border border-gray">
                  <div className="p-4">
                    <div className="border-b border-gray pb-2 mb-2">
                      <p className="text-light">CLI tool</p>
                    </div>
                    <h3 className="font-bold mb-4">Chess API</h3>
                    <p className="text-light text-sm mb-4">Public API for chess games</p>
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
            </div> */}

            {/* Other Projects Section */}
            {/* <div className="col-span-full">
              <h2 className="text-xl font-semibold mb-4">
                <span className="text-purple">/</span>other-projects
              </h2> */}

              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
                {/* Other Project 1 */}
                {/* <div className="border border-gray">
                  <div className="p-4">
                    <div className="border-b border-gray pb-2 mb-2">
                      <p className="text-light">Bash script</p>
                    </div>
                    <h3 className="font-bold mb-4">Arch Dotfiles</h3>
                    <p className="text-light text-sm mb-4">My Arch Linux configuration files</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple text-white hover:bg-purple hover:text-white"
                      >
                        Github &lt;~&gt;
                      </Button>
                    </div>
                  </div>
                </div> */}

                {/* Other Project 2 */}
                {/* <div className="border border-gray">
                  <div className="p-4">
                    <div className="border-b border-gray pb-2 mb-2">
                      <p className="text-light">VS Code extension</p>
                    </div>
                    <h3 className="font-bold mb-4">CSS Snippets</h3>
                    <p className="text-light text-sm mb-4">Collection of useful CSS snippets</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple text-white hover:bg-purple hover:text-white"
                      >
                        Github &lt;~&gt;
                      </Button>
                    </div>
                  </div>
                </div> */}

                {/* Other Project 3 */}
                {/* <div className="border border-gray">
                  <div className="p-4">
                    <div className="border-b border-gray pb-2 mb-2">
                      <p className="text-light">School website</p>
                    </div>
                    <h3 className="font-bold mb-4">School Website</h3>
                    <p className="text-light text-sm mb-4">Website for my local school</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple text-white hover:bg-purple hover:text-white"
                      >
                        Page &lt;~&gt;
                      </Button>
                    </div>
                  </div>
                </div> */}
              {/* </div> */}
            {/* </div> */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

import { GitHubIcon } from "../../components/icons/icon";
import { Button } from "../../components/ui/button";
import { Companies } from "../../components/landing/companies";
import { Features } from "../../components/landing/features";
import { SiteHeader } from "../../components/landing/site-header";
import { Template } from "../../components/landing/Template";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-background dark:bg-background-dark scrollbar-hide">
            <SiteHeader />
            <main className="flex-1 mx-4 md:mx-6 lg:mx-30">
                <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 flex justify-center items-center">
                    <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center justify-center">
                        <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-text dark:text-text-dark">
                            The Most Complete UI Suite for{" "}
                            <span className="text-primary">Aldaui</span>
                        </h1>
                        <p className="max-w-[42rem] leading-normal text-muted sm:text-xl sm:leading-8 dark:text-muted">
                            Beautiful and modern components built with React. Open source and free
                            to use in your next project.
                        </p>
                        <div className="space-x-4 mt-4 flex justify-center">
                            <Button
                                size="lg"
                                className="w-auto flex items-center justify-center bg-primary hover:bg-primary-hover text-white"
                            >
                                <a href="/component" className="flex items-center">
                                    Get Started
                                </a>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-auto flex items-center justify-center border-primary text-primary hover:bg-primary hover:text-white"
                            >
                                <a
                                    href="https://github.com/Gutierrez-16"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center"
                                >
                                    GitHub <GitHubIcon className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
                <Features />
                <Companies />
                <Template />
            </main>
            <footer className="border-t py-6 md:py-0 md:px-8 bg-surface dark:bg-black text-text-dark flex justify-center items-center">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-sm leading-loose text-center text-muted md:text-left">
                        Built by{" "}
                        <a
                            href="https://github.com/Gutierrez-16"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4 text-primary"
                        >
                            Gutierrez-16 ♥️
                        </a>
                        . The source code is available on{" "}
                        <a
                            href="https://github.com/Gutierrez-16/Aldaui"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4 text-primary"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </div>
            </footer>
        </div>
    );
}

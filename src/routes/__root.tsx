import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { CustomCursor } from "@/components/remal/CustomCursor";
import { AmbientOrbs } from "@/components/remal/AmbientOrbs";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-charcoal px-5 text-center text-ivory sm:px-6">
      <div className="eyebrow text-ivory/50 mb-6">Page Not Found</div>
      <h1 className="font-serif text-8xl text-ivory">404</h1>
      <p className="mt-6 max-w-sm text-sm text-ivory/60">
        The page you're looking for doesn't exist or has been moved.
        Let us take you back to familiar ground.
      </p>
      <div className="mt-10">
        <Link
          to="/"
          className="btn-primary"
        >
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5 text-center sm:px-6">
      <div className="eyebrow mb-6">Something went wrong</div>
      <h1 className="font-serif text-4xl text-foreground md:text-5xl">
        This page didn't load
      </h1>
      <p className="mt-4 max-w-sm text-sm text-muted-foreground">
        Something went wrong on our end. You can try refreshing or head back home.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="btn-dark"
        >
          <span>Try again</span>
        </button>
        <a
          href="/"
          className="inline-flex items-center gap-2 border border-charcoal/20 px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-charcoal transition-colors hover:border-charcoal"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "REMAL — Hospitality Management in Egypt" },
        {
          name: "description",
          content:
            "REMAL is a luxury hospitality management company building the next generation of immersive hotels, boutique resorts and tourism experiences across Egypt.",
        },
        { name: "author", content: "REMAL" },
        { name: "theme-color", content: "#2c2a27" },
        {
          property: "og:title",
          content: "REMAL — Hospitality Management in Egypt",
        },
        {
          property: "og:description",
          content:
            "Building the next generation of hospitality across Egypt — boutique resorts, hotel operations, and immersive tourism.",
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:title", content: "REMAL — Hospitality Management in Egypt" },
        { name: "twitter:title", content: "REMAL — Hospitality Management in Egypt" },
        { name: "description", content: "REMAL elevates Egyptian hospitality with a luxury, cinematic website showcasing management, resorts, and tourism experiences." },
        { property: "og:description", content: "REMAL elevates Egyptian hospitality with a luxury, cinematic website showcasing management, resorts, and tourism experiences." },
        { name: "twitter:description", content: "REMAL elevates Egyptian hospitality with a luxury, cinematic website showcasing management, resorts, and tourism experiences." },
        { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9368ea60-b84b-460b-a6be-12895cd80218/id-preview-b1461a9b--02b22989-ee5b-4c49-abb7-e4a15b87ab93.lovable.app-1778624200748.png" },
        { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9368ea60-b84b-460b-a6be-12895cd80218/id-preview-b1461a9b--02b22989-ee5b-4c49-abb7-e4a15b87ab93.lovable.app-1778624200748.png" },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap",
        },
        {
          rel: "preconnect",
          href: "https://videos.pexels.com",
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AmbientOrbs />
      <CustomCursor />
      <div className="page-enter relative z-[1]">
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

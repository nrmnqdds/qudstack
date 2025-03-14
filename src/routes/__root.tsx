import { DefaultCatchBoundary } from "@/components/default-catch-boundary";
import Navbar from "@/components/navbar";
import type { QueryClient } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
	{
		// notFoundComponent: () => <NotFound />,
		errorComponent: (props) => {
			return (
				<RootDocument>
					<DefaultCatchBoundary {...props} />
				</RootDocument>
			);
		},
		component: RootComponent,
	},
);

function RootComponent() {
	return (
		<RootDocument>
			<Navbar />
			<Outlet />
		</RootDocument>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<main className="relative isolate min-h-screen overflow-hidden">
			{children}
		</main>
	);
}

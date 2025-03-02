import { DefaultCatchBoundary } from "@/components/default-catch-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
	RouterProvider,
	createRouter as createTanStackRouter,
} from "@tanstack/react-router";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { routeTree } from "./routeTree.gen";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 3,
			refetchOnWindowFocus: false,
		},
	},
});

const router = createTanStackRouter({
	routeTree,
	context: { queryClient },
	defaultPreload: "intent",
	// defaultNotFoundComponent: () => <NotFound />,
	defaultErrorComponent: DefaultCatchBoundary,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};

export default App;

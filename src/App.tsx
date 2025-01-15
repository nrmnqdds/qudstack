import {
	RouterProvider,
	createRouter as createTanStackRouter,
} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient } from "@tanstack/react-query";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { DefaultCatchBoundary } from "@/components/default-catch-boundary";

function createRouter() {
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

	return routerWithQueryClient(router, queryClient);
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof createRouter>;
	}
}

const App = () => {
	return <RouterProvider router={createRouter()} />;
};

export default App;

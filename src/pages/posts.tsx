import { useGetAllPosts } from "@/hooks/posts";
import { Button, Heading } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function Posts() {
  const { data: session, status } = useSession();

  const { isLoading, error, data } = useGetAllPosts();

  if (status === "loading") {
    return <h2>Loding...</h2>;
  }

  return (
    <div>
      <Heading>Landing Page</Heading>

      {session ? <pre>{JSON.stringify(session, null, 2)}</pre> : null}

      <Button>Save</Button>

      <div>
        {JSON.stringify(
          {
            isLoading,
            error,
            data,
          },
          null,
          2
        )}
      </div>
    </div>
  );
}

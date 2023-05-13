import { Button, Heading } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();

  return (
    <div>
      <Heading>Landing Page</Heading>

      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : null}

      <Button>Save</Button>
    </div>
  );
}

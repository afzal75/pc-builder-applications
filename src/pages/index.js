import RootLayout from "@/components/layout/RootLayout";
import Heading from "@/components/ui/Heading";
import React from "react";

const Home = () => {

  return (
    <div>
      <Heading title={"Home"} />
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;
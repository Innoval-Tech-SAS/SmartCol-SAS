import DefaultLayout from "@/layouts/default";
import Banner from "@/components/banner";
import Catalogue from "@/components/catalogue";
import Categorys from "@/components/category";
import FrequentlyQuestions from "@/components/frequentlyQuestions"

export default function IndexPage() {

  return (
    <DefaultLayout>
      <section className="">
        <Banner bannerName="banner.jpg" />
        <Catalogue />
        <Categorys />
        <FrequentlyQuestions />
      </section>
    </DefaultLayout>
  );
}

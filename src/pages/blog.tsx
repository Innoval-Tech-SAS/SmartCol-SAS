import { useState, useEffect } from "react";

import "../styles/blog.css";
import Banner from "../components/banner";
import DefaultLayout from "@/layouts/default";
import PostCard from "@/components/post";

export default function BlogPage() {
  const [pageTitle, setPageTitle] = useState("");
  const bannerTitle = "SMARTCOL S.A.S.";
  const bannerSubTitle = "Blog";

  useEffect(() => {
    setPageTitle("SmartCol S.A.S. - Blog");
    document.title = pageTitle;
  }, [pageTitle, setPageTitle]);

  return (
    <DefaultLayout>
      <section className="">
        <Banner
          bannerName="banner.jpg"
          bannerSubtitle={bannerSubTitle}
          bannerTitle={bannerTitle}
        />
      </section>

      <section className="container mx-auto my-10">
        <div className="timeline">
          <div className="timeline-line"></div>
          <div className="timeline-item">
            <PostCard />
          </div>
          <div className="timeline-item">
            <PostCard />
          </div>
          <div className="timeline-item">
            <PostCard />
          </div>
          <div className="timeline-item">
            <PostCard />
          </div>
          <div className="timeline-item">
            <PostCard />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

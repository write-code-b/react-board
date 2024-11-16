import Header from "./Header";
import Footer from "./Footer";
import Table from "./Table";

function ContentList() {
  return (
    <>
      <>
        <Header />
        <section>
          <article>
            <h2>전체 게시글</h2>
            <Table />
          </article>
        </section>
        <Footer />
      </>
    </>
  );
}

export default ContentList;

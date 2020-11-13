import Link from "next/link";

import { Button } from "@material-ui/core";

const PaginationLink = ({ value, href, current }) => (
  <Link href={href}>
    <a>
      <Button
        color="primary"
        variant={current ? "contained" : "outlined"}
        className={current ? "textWhite" : ""}
      >
        {value}
      </Button>
    </a>
  </Link>
);

const Pagination = ({ pagination }) => {
  return (
    <>
      <ul className="flex w-full justify-center mt-6">
        <li className="mx-3">
          <PaginationLink
            href="/blog"
            value="1"
            current={pagination.current == "1"}
          />
        </li>
        {[...Array(pagination.pages - 1)].map((x, i) => (
          <li key={`page-${i}`} className="mx-3">
            <PaginationLink
              href={`/blog/page/${i + 2}`}
              value={i + 2}
              current={pagination.current == i + 2}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;

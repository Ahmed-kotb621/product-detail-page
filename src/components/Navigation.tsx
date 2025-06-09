import { Link } from "react-router-dom";

type NavigationProps = {
  data: string[];
};

function Navigation({ data }: NavigationProps) {
  return (
    <nav className="container my-8">
      <ol className="flex flex-wrap items-center  font-medium ">
        {data.map((item, index) => (
          <li
            key={item}
            className="text-[14px] md:text-[1rem] flex items-center"
          >
            {index > 0 && <p className="mx-2 text-grayprimary">{">"}</p>}
            <Link
              to="/"
              className={`${
                index === data.length - 1
                  ? "text-lightDark"
                  : "text-grayprimary"
              }`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Navigation;

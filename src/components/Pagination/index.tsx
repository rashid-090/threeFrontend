import React, { useEffect, useState } from "react";
import useUrlParams from "../../hooks/useUrlParams";

const Pagination: React.FC<any> = () => {
  const { searchParams, urlParamsHandler, resetParamsUrl } = useUrlParams();
  const page = parseInt(searchParams.get("page") || "1");
  const total = Math.ceil(parseInt(searchParams.get("total") || "100") / 10);
  const [elements, setElements] = useState<number[]>(Array.from(Array(10)?.keys()));

  useEffect(() => {
    if (Number(total) < 10) {
      setElements(Array.from(Array(Number(total))?.keys()));
    } else if (Number(total) > 10) {
      setElements(Array.from(Array(Number(10))?.keys()));
    }
  }, [total]);

  const previousPage = () => {
    if (elements[0] + 1 > 10) {
      setElements((prev: number[]): number[] => {
        const newArray = [];
        let i = prev[0] - 10;
        while (i < prev[0] && i < Number(total)) {
          newArray.push(i);
          i++;
        }
        return newArray;
      });
    }
  };
  const nextPage = () => {
    if (elements[elements.length - 1] + 1 < Number(total)) {
      setElements((prev: number[]): number[] => {
        const newArray = [];
        let i = prev[prev.length - 1] + 1;
        while (i <= prev[prev.length - 1] + 10 && i < Number(total)) {
          newArray.push(i);
          i++;
        }
        return newArray;
      });
    }
  };

  return (
    <div className="d-flex justify-content-end">
      {elements?.length > 1 && (
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li
              className={`page-item ${elements[0] + 1 === 1 ? " disabled" : " "
                }`}
            >
              <a
                className="page-link"
                href="#"
                onClick={previousPage}
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {elements?.map((it: number) => {
              return (
                <li
                  key={it + 1}
                  onClick={() => urlParamsHandler("page", it + 1)}
                  className={`page-item ${page == it + 1 ? " active" : " "}`}
                >
                  <a className="page-link" href="#">
                    {it + 1}
                  </a>
                </li>
              );
            })}
            <li
              className={`page-item ${elements[elements.length - 1] + 1 === total ? " disabled" : " "
                }`}
            >
              <a
                className="page-link"
                href="#"
                onClick={nextPage}
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Pagination;

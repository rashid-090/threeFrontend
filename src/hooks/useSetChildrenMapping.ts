import React from "react";

const useSetChildrenMapping = async (arr: any[], s: any[]) => {
  async function recurss(ar: any[]) {
    ar.forEach((it: any) => {
      it.label = it?.name;
      it.id = it?._id;
      if (!it?.children) return it;
      if (Array.isArray(it?.children)) {
        return recurss(it?.children);
      }
    });
  }
  await recurss(arr);
  return { arr };
};

export default useSetChildrenMapping;

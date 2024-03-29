

interface IhandleTableCheckHead {
    e: React.ChangeEvent<HTMLInputElement>;
    setCheckboxAll: (t: any) => void;
    setUsers: (t: any) => void;
    setCheckboxArray: (t: any) => void;
}

interface IhandleBodyCheck {
    e: React.ChangeEvent<HTMLInputElement>;
    setCheckboxArray: (t: any) => void;
    setCheckboxAll: (t: any) => void;
    users: any[]
}

export const HandleTableCheckBoxHead = ({ e, setCheckboxAll, setUsers, setCheckboxArray }: IhandleTableCheckHead) => {
    const { checked } = e?.target;
    setCheckboxAll(checked);
    setUsers((prev: any): any => {
        const idArray: string[] = [];
        const newData = prev;
        newData.forEach((it: any) => {
            if (checked) idArray.push(it?._id);
            it.checkbox = checked;
        });
        setCheckboxArray(idArray);
        return newData;
    });
}

export const HandleTableCheckBox = ({ e, setCheckboxArray, setCheckboxAll, users }:IhandleBodyCheck) => {
    const { value, checked } = e?.target;
    if (checked) {
        setCheckboxArray((prev: any): any => {
            const newData = [...prev, value];
            if (newData.length == users.length) setCheckboxAll(true);
            return newData;
        });
    } else {
        setCheckboxAll(false);
        setCheckboxArray((prev: any) => {
            const newData = prev.filter((it: string) => it != value);
            return newData;
        });
    }
}

export function OpenTable(id: string) {
    document
      .querySelector(`[id="${id}"].accordion-xs-collapse.inner-sec`)
      ?.classList?.toggle("collapse");
  }
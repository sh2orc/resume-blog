export default function About() {

    //문자 배열을 합쳐서 리턴
    function join(...str) {
        return str.join(' ');
    }

    return (
        <>
            <div className={"w-full border border-b shadow h-[50px] flex"}>
                <div className={"w-4/6 bg-gray-300 h-full flex"}>
                    <div className={join( //클래스가 길어서 나눠서 표현
                        "w-20 bg-amber-200 text-sky-700",
                        "text-xl text-center"
                    )}>
                        Logo
                    </div>

                    <div className={"flex space-x-5 ml-5 items-center"}>
                        <div class={join(
                            "px-3 cursor-pointer",
                            "hover:text-blue-700 hover:bg-red-100",
                            "hover:font-semibold hover:rounded"
                        )}>
                            Menu1
                        </div>
                        <div>Menu2</div>
                        <div>Menu3</div>
                    </div>
                </div>
                <div className={"w-2/6 bg-gray-500"}>top right</div>
            </div>

            <div className={"p-3"}>left</div>
            <div className={"p-3"}>container</div>
            <div className={"p-3"}>footer</div>
        </>
    )
}
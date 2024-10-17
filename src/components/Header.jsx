import Div from './library/Div'

export default function Header() {

    return (
        <Header className="flex flex-row justify-around !important">
            <Div className="text-red-700">
                <button className="rounded-full">x</button>
                <button>-</button>
                <button>o</button>
            </Div>
            <Div><input type="text" placeholder='search candidate: Eduard Hernández' /></Div>
            <Div className="flex flex-row">
                <button><img src="" alt="" /></button>
                <button><img src="" alt="" /></button>
                <button><img src="" alt="" /></button>
            </Div>
        </Header>
    )
}
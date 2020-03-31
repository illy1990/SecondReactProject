import React from 'react';
import IconBundle from "./IconBundle"
import "./ErsteSeiteMain1CSS.css"

const Main1 = () => {
    return (
        <section className="Flexiflex">
            <h1 id="GrunesEtwas">What we do</h1>
            <h2 id="SchwarzesEtwas">We've got everything you need to launch and grow your business</h2>
            <article>
                <div>
                    <IconBundle logo="https://th.bing.com/th/id/OIP.aBsCSSMqX1BGtWSpoe0rYAHaHa?w=203&h=203&c=7&o=5&pid=1.7" headline="Brand Identity" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                    <IconBundle logo="https://th.bing.com/th/id/OIP.X8H-4UODnjzoiy8s-tB8OAHaHa?w=213&h=194&c=7&o=5&pid=1.7" headline="Marketing" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                </div>
                <div>
                    <IconBundle logo="https://th.bing.com/th?id=OIP.oUye11kdoh9S0uhUSuTdNQHaHa&pid=Api&rs=1" headline="Illustration" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                    <IconBundle logo="https://th.bing.com/th?id=OIP.lWd4gA_yBVvYoGUaYTes4gHaHa&pid=Api&rs=1" headline="Webdesign" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                </div>
            </article>

        </section>
    );
}

export default Main1;
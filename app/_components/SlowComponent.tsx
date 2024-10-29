export default async function SlowComponent() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return <div>SlowComponent</div>
}
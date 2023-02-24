export const BasicTypes = () => {
    const name: string  = 'Emmanuel';
    const age: number = 35;
    const activated: boolean = true;

    const powers: string[] = ['Velocity', 'Volar', 'Breathing underwater'];

    return (
        <>
            <h3>Basics types</h3>
            {name}, {age}, {(activated) ? 'activated' : 'deactivated'}
            <br />
            {powers.join(', ')}
        </>
    )
}

export async function GET() {
    console.log('get data')
    try {
        return Response.json({
            data: [
                {
                    type: 'Fruit',
                    name: 'Apple',
                },
                {
                    type: 'Vegetable',
                    name: 'Broccoli',
                },
                {
                    type: 'Vegetable',
                    name: 'Mushroom',
                },
                {
                    type: 'Fruit',
                    name: 'Banana',
                },
                {
                    type: 'Vegetable',
                    name: 'Tomato',
                },
                {
                    type: 'Fruit',
                    name: 'Orange',
                },
                {
                    type: 'Fruit',
                    name: 'Mango',
                },
                {
                    type: 'Fruit',
                    name: 'Pineapple',
                },
                {
                    type: 'Vegetable',
                    name: 'Cucumber',
                },
                {
                    type: 'Fruit',
                    name: 'Watermelon',
                },
                {
                    type: 'Vegetable',
                    name: 'Carrot',
                }
            ]
        })
    } catch (error) {
        return Response.json({
            error
        }, { status: 500 })
    }
}
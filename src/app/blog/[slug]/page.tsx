import PublishDate from '@/components/post/publish-date';
import ReadingMinute from '@/components/post/reading-minute';
import Link from 'next/link';

export default function DetailBlog() {
    return (
        <div className='container mx-auto w-full px-4 md:w-[60%]'>
            <h1 className='text-3xl font-bold'>Simplifying State Management with Redux Toolkit: A Comprehensive Guide</h1>
            <div className='flex justify-start gap-3 my-4'>
                <PublishDate publish_at={'2024/09/09'}/>
                <ReadingMinute reading_minute={5}/>
            </div>
            <div>
                I recently published three posts on array destructuring, object destructuring, and destructuring from nested objects. Destructuring can be used inside the parentheses of a function definition (where you place the parameters) in order to pick out values from the arguments passed into a function. This is very useful when you only want to use certain properties from an object within the function. It does not make a difference what type of function you use but we will have a look at an example that uses an arrow function.
                Destructuring an object
                To destructure an object inside a function parameters we place a set of curly braces inside the parentheses of the function. Inside the curly braces, we place the properties of the object which we wish to pick out. Below is an example using an arrow function.
            </div>
            <div className='flex my-4'>
                <ul>
                    <li className='rounded-[10px] py-4 px-2 border-cyan-700 border-[1px]'>
                        <Link href="#">
                            HTML CSS
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
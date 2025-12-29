import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { NewPuppyForm } from '@/components/NewPuppyForm';
import { PageWrapper } from '@/components/PageWrapper';
import PuppiesList from '@/components/PuppiesList';
import { Search } from '@/components/Search';
import { Puppy } from '@/types/puppyTypes';
import { useMemo, useState } from 'react';

const App = ({ puppies }: { puppies: Puppy[] }) => (
    <PageWrapper>
        {/* <pre>{JSON.stringify(puppies, null, 2)}</pre> */}
        <Container>
            <Header />
            <Main puppies={puppies} />
        </Container>
    </PageWrapper>
);

export default App;

const Main = ({ puppies }: { puppies: Puppy[] }) => {
    const [puppy, setPoppy] = useState<Puppy[]>(puppies);
    // const [isLiked, setIsLiked] = useState<number[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const filteredPuppies = useMemo(
        () =>
            puppy.filter((puppy) =>
                searchQuery
                    ? puppy.name
                          ?.toLowerCase()
                          .includes(searchQuery.toLowerCase())
                    : true,
            ),
        [puppy, searchQuery],
    );

    return (
        <main>
            <div className="mt-24 grid gap-8 sm:grid-cols-2">
                <Search
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                {/* <Shortlist puppiesList={puppiesList} puppyIds={isLiked} /> */}
            </div>

            <PuppiesList puppiesList={filteredPuppies} />

            <NewPuppyForm puppiesList={puppy} setPuppiesList={setPoppy} />
        </main>
    );
};

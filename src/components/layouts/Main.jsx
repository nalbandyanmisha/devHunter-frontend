import MainHeader from '@/components/headers/MainHeader';
import MainContent from '@/components/MainContent';

export default function Main({ children }) {
  return (
    <main className="flex flex-col max-w-360 mx-auto px-20 gap-10">
      <MainHeader />
      <MainContent>
        { children }
      </MainContent>
    </main>
  );
}

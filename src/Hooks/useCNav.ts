import {useNavigation} from '@react-navigation/native';
const useCNav = () => {
  const {...nav} = useNavigation();
  function moveToRoute(route: string, params?: never ): () => void {
    return () => {
      nav.navigate(route as never, params as never);
    };
  }
  return {moveToRoute,...nav};
};

export default useCNav;

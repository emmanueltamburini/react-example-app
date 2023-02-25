import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqRes, User } from '../interfaces/reqRes';

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
  
    const page = useRef<number>(1)
  
    useEffect(() => {
      return () => {loadUsers();} 
    }, [])
  
    const loadUsers = async () => {
      const resp = await reqResApi.get<ReqRes>('/users', {
          params: {
              page: page.current
          }
      });
  
      if (resp.data.data.length > 0) {
          setUsers(resp.data.data);
      } else {
          page.current--;
          alert('There is no more users');
      }
    }

    const nextPage = () => {
        page.current++;
        loadUsers();
    }

    const previousPage = () => {
        if (page.current > 1) {
            page.current--;
            loadUsers();
        }
    }

    return {
        users,
        nextPage,
        previousPage
    };
}

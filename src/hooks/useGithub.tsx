import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const axiosGithub = axios.create({
  baseURL: 'https://api.github.com/'
});

interface Params {
  createdTo: string;
  sortBy?: string;
  order?: 'desc' | 'asc';
  page?: number;
}

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  language: string;
  stargazers_count: number;
  html_url: string;
  owner: { login: string };
}

export interface GithubData {
  total_count: number;
  items: Repository[];
}

export const useGithub = ({
  createdTo,
  sortBy,
  order = 'desc',
  page
}: Params) => {
  const [data, setData] = useState<GithubData>();
  const [lastPage, setLastPage] = useState<number>();
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getRepoData = useCallback(async () => {
    try {
      const { data, headers } = await axiosGithub.get<GithubData>(
        `/search/repositories?q=created:>${createdTo}&sort=${sortBy}&order=${order}&page=${page}`
      );

      const lastPageNumber = getLastPageNumber(headers.link);

      setLastPage(Number(lastPageNumber));

      setData(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    getRepoData();
  }, [getRepoData]);

  return {
    isLoading,
    repositories: data,
    lastPage,
    error
  };
};

function getLastPageNumber(linkHeader) {
  const lastLink = linkHeader
    .split(',')
    .find((link) => link.includes('rel="last"'));
  const url = lastLink.match(/<(.*?)>/)[1];
  const urlObj = new URL(url);
  return urlObj.searchParams.get('page');
}

import React from 'react'
import { render} from '@testing-library/react-native';
import {FlatList, StyleSheet,View} from 'react-native';
import RepositoryItem from '../../Components/RepositoryItem';

export const RepositoryListContainer = ({ repositories }) => {
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];
  
    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item})=> <RepositoryItem key={item.id} item={item}/>}
        // ...
      />
    );
  };

const styles = StyleSheet.create({
    separator: {
        height: 10,
        },
});

const ItemSeparator = () => <View style={styles.separator} />;

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
      it('renders repository information correctly', () => {
        const repositories = {
          totalCount: 8,
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        };
  
        // Add your test code here

        const {debug,getAllByTestId} = render(<RepositoryListContainer repositories={repositories}/>);
        
        debug();
        expect(getAllByTestId("RepositoryFullName")).toHaveLength(2);
        expect(getAllByTestId("RepositoryFullName")[0]).toHaveTextContent("jaredpalmer/formik");
        expect(getAllByTestId("RepositoryFullName")[1]).toHaveTextContent("async-library/react-async");
        
      });
    });
  });
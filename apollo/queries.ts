import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Mutation($data: LoginInput!) {
    login(data: $data) {
      id
      firstname
      roles
    }
  }
`;

export const REGISTER_USER = gql`
  mutation Register($data: UserCreateInput!) {
    register(data: $data)
  }
`;
export const GET_PROJECTS = gql`
  query Projects {
    projects {
      createdAt
      id
      subject
    }
  }
`;

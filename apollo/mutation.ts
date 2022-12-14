import { gql } from "@apollo/client";

//------------ AUTH ----------------
export const REGISTER_USER = gql`
  mutation Register($data: UserCreateInput!) {
    register(data: $data)
  }
`;

//-------------- TICKETS --------------

export const CREATE_TICKET = gql`
  mutation CreateTicket($data: TicketCreateInput!) {
    createTicket(data: $data) {
      id
      labels {
        name
      }
    }
  }
`;
export const DELETE_TICKET = gql`
  mutation DeleteTicket($where: TicketWhereUniqueInput!) {
    deleteTicket(where: $where) {
      id
    }
  }
`;

//--------------- PROJECTS ----------------

export const CREATE_PROJECT = gql`
  mutation CreateProject($data: ProjectCreateInput!) {
    createProject(data: $data) {
      id
      title
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation DeleteProject($where: ProjectWhereUniqueInput!) {
    deleteProject(where: $where) {
      id
    }
  }
`;

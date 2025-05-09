import { Area, Contact } from '@/types';
import { create } from 'zustand';

interface NodeInfo {
  id: string;
  title: string;
  color: string;
  type: string;
  details?: {
    description?: string;
    contacts?: Contact[];
    institution?: string;
    email?: string;
    website?: string;
    rating?: number;
  } | null;
}

interface FileInfo {
  id: number;
  name: string;
  path: string;
  size: number;
  mimetype: string;
}

interface ServerResponse {
  success: boolean;
  message: string;
  file: FileInfo;
  content: string;
  summary: string;
  xml: string;
}

interface ClientState {
  roadmap: boolean;
  color1: string;
  color2: string;
  graphData: Area[];
  selectedNode: NodeInfo | null;
  serverResponse: ServerResponse | null;
  setRoadmap: () => void;
  setGraphData: (graphData: Area[]) => void;
  setColor1: (color: string) => void;
  setColor2: (color: string) => void;
  setSelectedNode: (node: NodeInfo | null) => void;
  setServerResponse: (response: ServerResponse | null) => void;
}

export const useStore = create<ClientState>((set) => ({
  roadmap: false,
  color1: 'hsl(313.2,100%,50%)',
  color2: 'hsl(122.4,100%,58.5%)',
  graphData: [],
  selectedNode: null,
  serverResponse: null,
  setColor1: (color: string) => set({ color1: color }),
  setColor2: (color: string) => set({ color2: color }),
  setGraphData: (graphData: Area[]) => set({ graphData }),
  setSelectedNode: (node: NodeInfo | null) => set({ selectedNode: node }),
  setServerResponse: (response: ServerResponse | null) =>
    set({ serverResponse: response }),
  setRoadmap: () =>
    set((state: { roadmap: boolean }) => ({ roadmap: !state.roadmap })),
}));

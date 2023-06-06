import React, { useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { ForceGraph2D } from 'react-force-graph';

const Combinaison = () => {
  const graphRef = useRef(null);

  useEffect(() => {
    // Create graph data
    const nodes = [
      { id: 1, name: 'Node 1' },
      { id: 2, name: 'Node 2' },
      { id: 3, name: 'Node 3' },
    ];

    const links = [
      { source: 1, target: 2 },
      { source: 2, target: 3 },
    ];

    // Update the graph with the data
    if (graphRef.current) {
      const graph = graphRef.current;
      graph.d3Force('charge').strength(-300); // Customize the force layout if needed
      graph.graphData({ nodes, links });
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>Combinaison</Text>
      <View style={{ flex: 1 }}>
        <ForceGraph2D
          ref={graphRef}
          nodeLabel="name"
          linkDirectionalArrowLength={3}
          linkDirectionalArrowRelPos={1}
        />
      </View>
    </View>
  );
};

export default Combinaison;
